import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const data = {
    HCL: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Pembersih Freon (HF)": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Nitric/Hno3": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    Gandapura: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Kaporit Besar": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Kaporit Kecil": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Kaporit Granular": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Kaporit Cair": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Soda Kue": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Pelet Ikan": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Pupuk NPK": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    MSG: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Pottasium Sorbate": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Solvent/ Aseton Pembersih Kuku": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Garam Krosok": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "NP-10": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "White Oil": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Castor Oil": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Soda Api": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Parafin Wax/ Lilin": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    Texapon: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Cuka Dapur": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    ABF: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Menthol Crystal": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "PU A+B": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Sodium Benzoat": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Petrolleum Jelly": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "Epoxy A+B": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    "xanthan gum": [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    Eucalyptus: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    PG: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
    Amphitol: [
      {
        display: "10 PCS / 200Gr",
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
        display: "1L / 1 Kg",
        value: 1000,
        stock: 0,
      },
      {
        display: "5 L / KG",
        value: 5000,
        stock: 0,
      },
      {
        display: "20 L / KG",
        value: 20000,
        stock: 0,
      },
      {
        display: "50 L / KG",
        value: 50000,
        stock: 0,
      },
      {
        display: "25kg",
        value: 25000,
        stock: 0,
      },
    ],
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}></div> */}
      <div className={styles.content}>
        <div className={styles.head}></div>
        <div className={styles.items}>
          {Object.entries(data).map(([key, value], index) => {
            return (
              <div key={key[0] + "-" + index} className={styles.item}>
                <div className={styles.product}>{key}</div>
                <div className={styles.displays}>
                  {value.map((w, windex) => {
                    return (
                      <div className={styles.weight}>
                        <div className={styles.display}>{w.display}</div>
                        <div className={styles.stock}>
                          <button className={styles.stockMinus}>-</button>
                          <div className={styles.stockDisplay}>{w.stock}</div>
                          <button className={styles.stockPlus}>+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <div className={styles.stocks}>
                  {value.map((w, windex) => {
                    return (
                      
                    );
                  })}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
