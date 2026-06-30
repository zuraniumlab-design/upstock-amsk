import { supabase } from './supabaseClient';

/**
 * Ambil semua produk + sku + qty terbaru.
 * Struktur table:
 *  products (id, name)
 *  skus (id, product_id, sku_code, qty)
 */
export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      name,
      skus:skus ( id, sku_code, qty )
    `)
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
}

/**
 * Update qty satu SKU (dipakai tombol +/- manual di kartu produk)
 */
export async function updateSkuQty(skuId, newQty) {
  const { error } = await supabase
    .from('skus')
    .update({ qty: newQty })
    .eq('id', skuId);

  if (error) throw error;
}

/**
 * Cari sku berdasarkan kode sku (dipakai saat parsing resi)
 */
export async function findSkuByCode(skuCode) {
  const { data, error } = await supabase
    .from('skus')
    .select('id, qty, product_id, sku_code')
    .eq('sku_code', skuCode)
    .maybeSingle();

  if (error) throw error;
  return data;
}

/**
 * Catat transaksi keluar (penjualan dari resi) + kurangi stock + simpan log.
 * type: 'out' (penjualan) atau 'in' (restock manual)
 */
export async function recordStockMovement({ skuId, qty, type, note }) {
  // 1. Ambil qty sekarang
  const { data: sku, error: skuErr } = await supabase
    .from('skus')
    .select('qty')
    .eq('id', skuId)
    .single();
  if (skuErr) throw skuErr;

  const delta = type === 'out' ? -Math.abs(qty) : Math.abs(qty);
  const newQty = (sku.qty ?? 0) + delta;

  // 2. Update qty
  const { error: updErr } = await supabase
    .from('skus')
    .update({ qty: newQty })
    .eq('id', skuId);
  if (updErr) throw updErr;

  // 3. Simpan log pergerakan stock (audit trail, biar gak ada selisih misterius lagi)
  const { error: logErr } = await supabase
    .from('stock_movements')
    .insert({ sku_id: skuId, qty, type, note });
  if (logErr) throw logErr;

  return newQty;
}
