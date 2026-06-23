import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import { Minus, Plus, Search, Trash, Trash2, Trash2Icon } from "lucide-react";

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
      stock: 1,
    },
    {
      display: "250ml / Gr",
      value: 250,
      stock: 10,
    },
    {
      display: "500ml / Gr",
      value: 500,
      stock: 0,
    },
    {
      display: "1L / Kg",
      value: 1000,
      stock: 9,
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
  const [addProduct, setAddProduct] = useState(null);

  const [productDisplay, setProductDisplay] = useState("");
  const [productValue, setProductValue] = useState("");

  const productDisplayRef = useRef(null);
  const productValueRef = useRef(null);

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

  const removeWeight = (product, id) => {
    setData((prev) => ({
      ...prev,
      [product]: prev[product].filter((item, index) => index !== id),
    }));
  };

  const handleAddWeight = (id) => {
    setAddProduct((prev) => (prev == id ? null : id));
  };

  const onEnter = (e, func) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      func()
    }
  }

  const addWeight = (product) => {
    if (productDisplayRef.current && !productDisplay.length) {
      productDisplayRef.current.focus();
      return;
    }
    if (productValueRef.current && !productValue.length) {
      productValueRef.current.focus();
      return;
    }

    setData((prev) => ({
      ...prev,
      [product]: [
        ...prev[product],
        {
          display: productDisplay,
          value: productValue,
          stock: 0
        }
      ]
    }));
    setAddProduct(null)
    setProductDisplay('')
    setProductValue('')
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}></div> */}
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.addProduct}></div>
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
                <div className={styles.topItem}>
                  <button className={styles.addItem}>
                    <Plus />
                    <div className={styles.addItemLabel}>Add Product</div>
                  </button>
                  <button
                    className={styles.addWeight}
                    title="Add Weight"
                    onClick={() => handleAddWeight(index)}
                  >
                    {addProduct == index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </button>
                </div>
                <div className={styles.weights}>
                  {value.map((w, windex) => {
                    return (
                      <div key={index + "-" + windex} className={styles.weight}>
                        <div className={styles.displays}>
                          <div className={styles.display}>
                            {w.display}{" "}
                            <span>( {w.value.toLocaleString()} Gr )</span>
                          </div>
                          <div
                            className={styles.removeWeight}
                            onClick={() => removeWeight(key, windex)}
                          >
                            <Trash2 size={16} />
                          </div>
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
                  {addProduct == index && (
                    <form className={styles.addProduct}>
                      <input
                        ref={productDisplayRef}
                        type="text"
                        placeholder="Display: 10ml/gr"
                        onInput={(e) => setProductDisplay(e.target.value)}
                        onKeyDown={(e) => onEnter(e, () => addWeight(key))}
                        autoFocus
                      />
                      <input
                        ref={productValueRef}
                        type="text"
                        placeholder="Value: 10"
                        onInput={(e) => setProductValue(e.target.value)}
                        onKeyDown={(e) => onEnter(e, () => addWeight(key))}
                      />
                    </form>
                  )}
                </div>
                <div key={index + "-"} className={styles.bottomItem}>
                  <div className={styles.totalStock}>
                    Stock Ready:{" "}
                    {value.reduce((a, b) => a + (b.stock * b.value) / 1000, 0)}{" "}
                    Kg
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
