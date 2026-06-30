import { useMemo, useState } from 'react';
import { updateSkuQty } from '../lib/stockApi';

export default function ProductGrid({ products, loading, onChanged }) {
  const [search, setSearch] = useState('');
  const [busySkuId, setBusySkuId] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products
      .map((p) => ({
        ...p,
        skus: p.skus.filter(
          (s) =>
            s.sku_code.toLowerCase().includes(q) ||
            p.name.toLowerCase().includes(q)
        ),
      }))
      .filter((p) => p.name.toLowerCase().includes(q) || p.skus.length > 0);
  }, [products, search]);

  const handleStep = async (sku, dir) => {
    const newQty = Math.max(0, (sku.qty ?? 0) + dir);
    setBusySkuId(sku.id);
    try {
      await updateSkuQty(sku.id, newQty);
      onChanged();
    } catch (e) {
      alert('Gagal update qty: ' + e.message);
    } finally {
      setBusySkuId(null);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari produk atau SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <p className="muted">Memuat data stock...</p>}
      {!loading && filtered.length === 0 && (
        <p className="muted">Tidak ada produk yang cocok.</p>
      )}

      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            {p.skus.map((sku) => (
              <div key={sku.id} className="sku-row">
                <span>{sku.sku_code}</span>
                <div className="qty-control">
                  <button
                    disabled={busySkuId === sku.id}
                    onClick={() => handleStep(sku, -1)}
                  >
                    -
                  </button>
                  <span className={(sku.qty ?? 0) <= 0 ? 'qty-zero' : ''}>
                    {sku.qty ?? 0}
                  </span>
                  <button
                    disabled={busySkuId === sku.id}
                    onClick={() => handleStep(sku, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
