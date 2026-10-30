'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SITE_DATA as data } from '@/lib/content';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HomePage from '@/components/home/HomePage';
import ProductDetail from '@/components/product/ProductDetail';

type ZoomState = {
  src: string;
  alt: string;
  label: string;
};

type RouteState = {
  hash: string;
  product: (typeof data.products)[number] | null;
  section: string | undefined;
};

function ImageDialog({ zoom }: { zoom: ZoomState }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (zoom.src) dialogRef.current?.showModal();
  }, [zoom]);

  return (
    <dialog
      ref={dialogRef}
      id="image-dialog"
      aria-label="Xem ảnh sản phẩm phóng lớn"
      onClick={(event) => {
        if (event.target !== dialogRef.current) return;
        const bounds = dialogRef.current.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          dialogRef.current.close();
        }
      }}
    >
      <div className="dialog-bar">
        <span id="zoom-label">{zoom.label}</span>
        <button
          className="zoom-close"
          aria-label="Đóng ảnh phóng lớn"
          onClick={() => dialogRef.current?.close()}
        >
          Đóng <span aria-hidden="true">×</span>
        </button>
      </div>
      {zoom.src ? <img id="zoom-image" src={zoom.src} alt={zoom.alt} /> : null}
    </dialog>
  );
}

function getRoute(): RouteState {
  let hash = window.location.hash.slice(1);
  try {
    hash = decodeURIComponent(hash);
  } catch {
    // Keep malformed user-provided hashes from breaking navigation.
  }

  const [route, productId, section] = hash.split('/');
  const product = route === 'san-pham' && productId
    ? data.products.find((item) => item.id === productId) ?? null
    : null;

  return { hash, product, section };
}

export default function Site() {
  const [route, setRoute] = useState<ReturnType<typeof getRoute>>({
    hash: '',
    product: null,
    section: undefined,
  });
  const [zoom, setZoom] = useState<ZoomState>({
    src: '',
    alt: '',
    label: '',
  });
  const previousView = useRef('');

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const { hash, product, section } = route;
  const view = product ? `detail:${product.id}` : 'home';
  const title = product ? `${product.name} — TKaki-Labs` : 'TKaki-Labs — Quần short kaki nam';

  useEffect(() => {
    document.title = title;
    if (previousView.current !== view) {
      previousView.current = view;
      window.scrollTo(0, 0);
    }

    if (product && section === 'bang-size') {
      document.getElementById('detail-size')?.scrollIntoView();
    } else if (!product && hash) {
      document.getElementById(hash)?.scrollIntoView();
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, product, section, title, view]);

  const openZoom = useCallback((src: string, alt: string, label: string) => {
    setZoom({ src, alt, label });
  }, []);

  return (
    <>
      <a className="skip" href="#main">Chuyển đến nội dung</a>
      <Header />
      <main id="main" tabIndex={-1}>
        {product ? (
          <ProductDetail key={product.id} product={product} onZoom={openZoom} />
        ) : (
          <HomePage product={data.products[0]} />
        )}
      </main>
      <Footer />
      <ImageDialog zoom={zoom} />
    </>
  );
}
