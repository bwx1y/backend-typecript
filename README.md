
# Backend-Typecript

Backend ini menggunakan bahasa [Typecript](https://www.typescriptlang.org/), Saya masih pemula dalam bahasa ini jadi masih banyak yang belum saya tahu tetapi saya mencoba membuat backend sederhana yang akan berisikan id, namaBarang, jumlahbarang, hargaBarang.




## Jalankan

Copy project

```bash
  git clone https://github.com/bwx1y/backend-typecript/
```

Pergi ke directory

```bash
  cd backend-typecript
```

Install dependencies

```bash
  npm install
```

alankan server

```bash
  npm run start
```


## Environment Variables

Untuk menjalankan proyek ini, Anda perlu menambahkan variabel lingkungan berikut ke file .env Anda atau ini akan mengambil data base default yaitu :

`DB = test`

`DB_USER = root`

`DB_PASSWORD`

`DB_HOST = localhost `


## API Reference

#### Get all items

```http
  GET /barang
```

#### Get item

```http
  GET /barang/${id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `UUID` |

#### Add

```http
  POST /barang/add
```

| body | Type     |
| :-------- | :------- |
| `namaBarang`      | `String` |
| `hargaBarang` | `Number` |
| `jumlahBarang`      | `Number` |

### Edit

```http
  PUT /barang/edit/${id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `UUID` |

| body | Type     |
| :-------- | :------- |
| `namaBarang`      | `String` |
| `hargaBarang` | `Number` |
| `jumlahBarang`      | `Number` |

### Delete

```http
  DELETE /barang/delete/${id}
```
| Parameter | Type     |
| :-------- | :------- |
| `id`      | `UUID` |

## Dibuat oleh

Projet ini di buat oleh :

- [BWX1Y](https://bwx1y.my.id/)

