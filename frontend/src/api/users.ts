const API_URL = "http://localhost:8000";

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

export const uploadCsv = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  await fetch(`${API_URL}/upload-csv`, {
    method: "POST",
    body: formData,
  });
};

export const createUser = async (data: any) => {
  await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateUser = async (id: number, data: any) => {
  await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteUser = async (id: number) => {
  await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
};
