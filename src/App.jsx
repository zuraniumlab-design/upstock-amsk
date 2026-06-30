import { useCallback, useEffect, useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import ResiInput from './components/ResiInput';
import { fetchProducts } from './lib/stockApi';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (e) {
      setErrorMsg(
        'Gagal ambil data dari database. Pastikan .env sudah diisi dan tabel sudah dibuat. (' +
          e.message +
          ')'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Stock Opname Kimia</h1>
        <p className="subtitle">Aba Mandiri Sejahtera Kimia &mdash; Divisi Online</p>
      </header>

      {errorMsg && <div className="error-banner">{errorMsg}</div>}

      <ProductGrid products={products} loading={loading} onChanged={loadProducts} />

      <ResiInput onChanged={loadProducts} />
    </div>
  );
}

export default App;
