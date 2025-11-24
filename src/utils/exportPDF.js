// src/utils/exportPDF.js
import { formatRupiah } from "./format";

export const exportReportToPDF = (dataToExport, filename) => {
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>${filename}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; }
        h2 { text-align: center; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
        th { background-color: #f8f9fa; }
        tr:nth-child(even) { background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      <h2>Laporan Tahunan ${filename.split("_").pop()}</h2>
      <table>
        <thead>
          <tr>
            <th>Bulan</th>
            <th>Tahun</th>
            <th>Transaksi</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          ${dataToExport
            .map(
              (row) => `
            <tr>
              <td>${row.month}</td>
              <td>${row.year}</td>
              <td>${row.transactions}</td>
              <td>${formatRupiah(row.revenue)}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  win.document.write(printContent);
  win.document.close();
  win.onload = () => win.print();
};
