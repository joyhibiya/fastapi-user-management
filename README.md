# FastAPI User Management API

このプロジェクトは FastAPI（バックエンド）と React + TypeScript（フロントエンド）で構築した
ユーザー管理アプリケーションです。

- ユーザー一覧表示
- ユーザー削除
- CSV アップロードによる一括登録
- SQLite + SQLAlchemy によるデータ永続化


---

## 🚀 使用技術

### Backend
- Python 3.9（※安定動作のため）
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

### Frontend
- React
- TypeScript
- Vite
- Fetch API


---

## 📁 フォルダ構成

```
project-root/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   ├── models/
│   │   └── schemas/
│   ├── requirements.txt
│   ├── sqlite.db
│   └── users.csv
└── frontend/
    ├── src/
    ├── package.json
    └── vite.config.ts

```

---

## ▶️ 起動方法

```
## Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

## Frontend
cd frontend
npm install
npm run dev

```

## ▶️ アプリ起動後のアクセス先

---

Backend (FastAPI)  
http://127.0.0.1:8000
Swagger UI: http://127.0.0.1:8000/docs

Frontend (React)  
http://127.0.0.1:5173

---

## 📌 API 一覧

### ユーザ CRUD
- GET /users/
- POST /users/
- GET /users/{id}
- PUT /users/{id}
- DELETE /users/{id}

### CSV アップロード
- POST /csv/upload

---

## 📥 CSV アップロード方法

`/csv/upload` に CSV ファイルを POST すると、  
ユーザ情報が一括で DB に登録されます。

### CSV の例

```
id,name,email
1,A,a@example.com
2,B,b@example.com
```

---

## 🗄 DB の確認方法

VSCode の **SQLite Viewer** 拡張機能を使用して、  
`sqlite.db` の内容を GUI で確認できます。

---

## 🔧 今後の拡張案

- PostgreSQL への移行
- Docker 化
- JWT 認証の追加
- ユーザ検索 API の追加
- ログ管理機能の追加
- フロントエンド UI の改善
  - デザイン調整
  - バリデーション強化
  - エラーハンドリングの追加