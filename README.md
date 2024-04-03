# Microservice Restoran Menggunakan NestJS-RabbitMQ-MySQL-Swagger

Project ini dimulai pada tanggal 24 Feb 2024 jam 🕤 yang mensimulasikan sebuah restoran dengan 4 buah service utama yaitu `auth` `Order` `Kitchen` dan `Notification`.

Ini adalah rancangan arstiektur microservice menggunakan NESTJS sebagai platform inti, RabbitMQ sebagai exchange command, MySQL sebagai database, JWT untuk otentikasi pengguna, Swagger untuk manajemen API dan alat pengujian. Proyek ini dikerjakan dalam waktu yang singkat tanpa persiapan apapun, sehingga mungkin saja ditemui beberapa bug saat menjalankannya. Oleh karena itu Anda dapat menghubungi saya untuk penanganan masalah lebih lanjut.

## Proyek Ini Cocok Untuk Siapa?
Tidak ada batasan untuk siapa saja yang penting konteks dalam bahasan rancangan sederhana ini dapat berguna, namun cocok sekali jika kamu ingin mengimplementasikan dan explorasi microservice menggunakan framework nestjs, docker, mysql, rabbitmq. Tapi mungkin kamu adalah orang dalam daftar di bawah ini:
- Mahasiswa tingkat akhir yang sedang mencari bahan untuk rancangan microservice
- Orang yang penasaran dengan microservice
- Sedang menambah portfolio untuk CVnya
- Ingin mengembangkan platform restoran yang ringan
- Nyari source code gratisan untuk di koleksi

## Rancangan Arsitektur

![alt text](https://github.com/anovanmaximuz/uki/blob/master/img/restoran.png?raw=true)

## Kebutuhan

- Node.js 18.x
- RabbitMQ
- MySQL
- Swagger

## Instalasi

1. Clone repository

   ```sh
   git clone https://github.com/anovanmaximuz/nestjs-docker-rabbit-mysql .
   ```

2. Dockernize
   ```sh
   docker compose up
   ```

3. Database

   Cari file dalam folder `database` dan import ke dalam mysql yang sudah jalan dalam docker.
   ``` sh
   cd database
   mysql -u rest -p restaurant restaurant < uki.sql
   ```
   Kamu bisa menggunakan `prisma` untuk membuat skema dan data dummy, masuk ke folder `order` , sebelumnya ubah isi dalam `.env` menjadi `DATABASE_URL="mysql://uki:uki123@localhost:3306/restaurant"`
   ```sh
   npx prisma db push
   npx prisma db seed
   ```
## Dokumentasi API
Tersedia untuk service `auth` dan `order`, menggunakan `swagger` sebagai API generator agar mudah menggunakannya.
- Order API di akses via `http://localhost:3000/docs`
- Auth API di akses via `http://localhost:3001/docs`

![alt text](https://github.com/anovanmaximuz/nestjs-docker-rabbit-mysql/blob/master/img/swagger.png?raw=true)
 

## Penggunaan

Dalam rancangan ini menyediakan 4 services: `auth` `order` `notification` `kitchen`.
1. `auth` to handle user authentication
2. `order` untuk membuat pesanan, cek menu dan status, ketika order dibuat akan dikirimkan ke dalam antrian RabbitMQ dan di consumed oleh notifications dan kitchen service.
3. `notification` bertugas mengirimkan email konfirmasi pesanan
4. `kitchen` menerima order dan merubah status order menjadi `processing`. 

## Cara Pakai
1. Make you has been registered to get user_id
2. Fetch menu before place an order to get food_id
3. Determine your order_id but now it is still in number format, it can be developed for unique invoice numbers in the future
4. If you finish choose then menu then you can Checkout using order_id
5. After checkout, you will receive an email order detail

## Batasan,  untuk pengembangan lebih lanjut

Fungsi `JWT Auth` bisa di eksplore lebih jauh lagi untuk layanan yang membutuhkan data user secara khhusus, kamu bisa menggunakan aplikasi untuk dasar pengembangan yang lebih komplek.

## License

Bebas dipakai, didistribusikan, di acak-acak dengan catatan tidak menghilangkan sumber asli source code ini!

<!-- CONTACT -->

## Contact

Yuk Kenalan --> [LinkedIn](https://www.linkedin.com/in/anovan/)

## My Crypto AI Platform
Empowering cryptocurrency traders and investors, our cutting-edge tool employs advanced analytics, statistics, and algorithms to meticulously track and analyze over 800 cryptocurrencies. Providing a comprehensive view of market conditions, individual crypto movements, and insights from both professional and community references, our platform integrates real-time news sharing to enhance user knowledge. A precise reference for investors and traders alike, our tool serves as a valuable assistant, optimizing profit potential and mitigating risk. It stands as a specialized complement to any crypto exchange, offering a medium for continuous learning to the wider audience.

Official: [Bedcrypto](https://bedcrypto.com/)

Manual: [Guide Bedcrypto](https://guide.bedcrypto.com/)

Mobile Apps: [Android](https://play.google.com/store/apps/details?id=com.planet.signal)

