import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Search } from "lucide-react";

const d = {
  HCL: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Pembersih Freon (HF)": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Nitric/Hno3": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  Gandapura: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Kaporit Besar": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Kaporit Kecil": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Kaporit Granular": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Kaporit Cair": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Soda Kue": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Pelet Ikan": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Pupuk NPK": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  MSG: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Pottasium Sorbate": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Solvent/ Aseton Pembersih Kuku": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Garam Krosok": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "NP-10": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "White Oil": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Castor Oil": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Soda Api": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Parafin Wax/ Lilin": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  Texapon: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Cuka Dapur": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  ABF: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Menthol Crystal": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "PU A+B": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Sodium Benzoat": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Petrolleum Jelly": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "Epoxy A+B": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  "xanthan gum": [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  Eucalyptus: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  PG: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
  Amphitol: [
    {
      display: "10Pcs / 200Gr",
      value: 200,
      stock: 0,
    },
    {
      display: "100ml / Gr",
      value: 100,
      stock: 0,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 0,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 0,
    },
    {
      display: "5 L / Kg",
      value: 5000,
      stock: 0,
    },
    {
      display: "20 L / Kg",
      value: 20000,
      stock: 0,
    },
    {
      display: "50 L / Kg",
      value: 50000,
      stock: 0,
    },
    {
      display: "25Kg",
      value: 25000,
      stock: 0,
    },
  ],
};

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(d);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const updateStock = (product, id, action) => {
    setData((prev) => ({
      ...prev,
      [product]: prev[product].map((item, index) =>
        index == id
          ? {
              ...item,
              stock:
                item.stock + (action == "-" ? (item.stock > 0 ? -1 : 0) : 1),
            }
          : item,
      ),
    }));
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}></div> */}
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.search}>
            <Search />
            <input
              className={styles.inputSearch}
              placeholder="Search:"
              onInput={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.items}>
          {Object.entries(data).map(([key, value], index) => {
            if (
              search.length &&
              !key.toLowerCase().startsWith(search.toLowerCase())
            )
              return;
            return (
              <div key={key[0] + "-" + index} className={styles.item}>
                <div className={styles.product}>{key}</div>
                <div className={styles.weights}>
                  {value.map((w, windex) => {
                    return (
                      <div key={index + "-" + windex} className={styles.weight}>
                        <div className={styles.display}>
                          {w.display}{" "}
                          <span>( {w.value.toLocaleString()} Gr )</span>
                        </div>
                        <div className={styles.stock}>
                          <button
                            className={styles.stockMinus}
                            onClick={() => updateStock(key, windex, "-")}
                          >
                            -
                          </button>
                          <div className={styles.stockDisplay}>{w.stock}</div>
                          <button
                            className={styles.stockPlus}
                            onClick={() => updateStock(key, windex, "+")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div key={index + "-"} className={styles.weight}>
                    <div className={styles.totalStock}>
                      {value.reduce((a, b) => a + (b.stock * b.value) / 1000, 0)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
