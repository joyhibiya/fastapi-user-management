# FastAPI User Management API
このプロジェクトは **FastAPI** を使用したユーザ管理 API です。  
CRUD 操作に加えて、**CSV アップロードによるユーザの一括登録**に対応しています。  
データ永続化には **SQLite + SQLAlchemy**を採用しており、  
業務規模に応じて **PostgreSQL への移行**も容易に行える構成になっています。

---

## 🚀 使用技術

- Python 3.143
- FastAPI  
- SQLAlchemy  
- SQLite  
- Pydantic  
- Uvicorn  

---

## 📁 フォルダ構成
python-log-tool/
├── app/
│     ├── test.py
│     ├── database.py
│     ├── models/
│     │     └── user.py
│     ├── schemas/
│     │     └── user.py
│     └── routers/
│           ├── users.py
│           └── csv.py
├── sqlite.db
├── users.csv
├── README.md
└── requirements.txt

---

## ▶️ 起動方法

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload

起動後、以下にアクセスすると Swagger UI が利用できます：
http://127.0.0.1:8000/docs

---

## API 一覧

### ユーザ CRUD
- GET /users/
- POST /users/
- GET /users/{id}
- PUT /users/{id}
- DELETE /users/{id}

### CSV アップロード
- POST /csv/upload

---

## CSV アップロード方法

`/csv/upload` に CSV ファイルを POST すると、
ユーザ情報が一括で DB に登録されます。

CSV の例：
id,name,email
1,A,a@example.com
2,B,b@example.com

---

## DB の確認方法

VSCode の SQLite Viewer 拡張機能を使用して、
`sqlite.db` を開くことでテーブル内容を確認できます。

---

## 今後の拡張案

- PostgreSQL への移行
- Docker 化
- JWT 認証の追加
- ユーザ検索 API の追加
- ログ管理機能の追加
- TypeScript + React を使用したフロントエンド画面の実装  
  - ユーザ一覧表示  
  - ユーザ登録フォーム  
  - CSV アップロード UI  
  - FastAPI と連携した API クライアントの実装
