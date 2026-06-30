import { useState } from 'react';
import { findSkuByCode, recordStockMovement } from '../lib/stockApi';

/**
 * Format resi yang didukung (per item, dipisah baris kosong atau berurutan):
 *
 *  Product: Nitric Acid
 *  SKU: IND-NA-01L
 *  Qty: 2
 *
 *  Product: HCL Liquid
 *  SKU: IND-HCL-500M
 *  Qty: 1
 *
 * Caption otomatis (buat ditempel di label paket) di-generate setelah parse,
 * formatnya: "Nama Produk (SKU) x Qty"
 */
function parseResiText(text) {
  const lines = text.split('\n');
  const parsed = [];
  let current = {};

  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) return;

    if (/^product\s*:/i.test(line)) {
      current = { product: line.replace(/^product\s*:/i, '').trim() };
    } else if (/^sku\s*:/i.test(line)) {
      current.sku = line.replace(/^sku\s*:/i, '').trim();
    } else if (/^qty\s*:/i.test(line)) {
      current.qty = parseFloat(line.replace(/^qty\s*:/i, '').trim());
      if (current.sku && current.qty) {
        parsed.push(current);
        current = {};
      }
    }
  });

  return parsed;
}

function buildCaption(items) {
  return items
    .map((it) => `${it.product} (${it.sku}) x${it.qty}`)
    .join('\n');
}

export default function ResiInput({ onChanged }) {
  const [resiText, setResiText] = useState('');
  const [items, setItems] = useState([]);
  const [caption, setCaption] = useState('');
  const [saving, setSaving] = useState(false);
  const [warnings, setWarnings] = useState([]);

  const handleParse = () => {
    const parsed = parseResiText(resiText);
    setItems(parsed);
    setCaption(buildCaption(parsed));
    setWarnings([]);
    if (parsed.length === 0) {
      alert('Gak ada item yang kebaca. Cek lagi format resinya ya (Product / SKU / Qty).');
    }
  };

  const handleSimpan = async () => {
    if (items.length === 0) return;
    setSaving(true);
    const newWarnings = [];

    for (const item of items) {
      try {
        const sku = await findSkuByCode(item.sku);
        if (!sku) {
          newWarnings.push(`SKU "${item.sku}" tidak ditemukan di database, dilewati.`);
          continue;
        }
        await recordStockMovement({
          skuId: sku.id,
          qty: item.qty,
          type: 'out',
          note: `Resi: ${item.product} x${item.qty}`,
        });
      } catch (e) {
        newWarnings.push(`Gagal simpan "${item.sku}": ${e.message}`);
      }
    }

    setWarnings(newWarnings);
    setSaving(false);

    if (newWarnings.length === 0) {
      alert('Tersimpan! Stock sudah otomatis terkurangi.');
      setResiText('');
      setItems([]);
      setCaption('');
      onChanged();
    }
  };

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption);
      alert('Caption resi disalin ke clipboard!');
    } catch {
      alert('Gagal copy otomatis, silakan select manual teksnya.');
    }
  };

  return (
    <div className="resi-section">
      <h2>Input Resi Penjualan</h2>
      <textarea
        rows={8}
        value={resiText}
        onChange={(e) => setResiText(e.target.value)}
        placeholder={
          'Paste resi di sini...\nContoh:\nProduct: Nitric Acid\nSKU: IND-NA-01L\nQty: 2'
        }
      />
      <div className="resi-actions">
        <button onClick={handleParse}>Convert / Parse</button>
        <button
          onClick={handleSimpan}
          disabled={items.length === 0 || saving}
          className="btn-primary"
        >
          {saving ? 'Menyimpan...' : 'Simpan ke Stock'}
        </button>
      </div>

      {warnings.length > 0 && (
        <ul className="warnings">
          {warnings.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="resi-preview">
          <h3>Preview Item</h3>
          <table>
            <thead>
              <tr>
                <th>Produk</th>
                <th>SKU</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, idx) => (
                <tr key={idx}>
                  <td>{it.product}</td>
                  <td>{it.sku}</td>
                  <td>{it.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Caption Otomatis (buat ditempel di label paket)</h3>
          <textarea readOnly rows={Math.max(3, items.length)} value={caption} />
          <button onClick={copyCaption}>Copy Caption</button>
        </div>
      )}
    </div>
  );
}
