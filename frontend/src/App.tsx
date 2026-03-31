import { CsvUpload } from "./components/CsvUpload";
import { UserTable } from "./components/UserTable";

function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>ユーザー管理</h1>

      <div style={{ marginBottom: "40px" }}>
        <UserTable />
      </div>

      <div>
        <CsvUpload />
      </div>
    </div>
  );
}

export default App;
