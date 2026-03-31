import { useState } from "react";
import { uploadCsv } from "../api/users";

export const CsvUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    await uploadCsv(file);
    alert("アップロード完了");
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>CSVアップロード</button>
    </div>
  );
};
