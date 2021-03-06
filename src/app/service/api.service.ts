import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDataMahasiswa() {
    return this.http.get(`http://localhost:8080/mahasiswa`);
  }

  getDataMahasiswaById(id) {
    return this.http.get(`http://localhost:8080/mahasiswa/` + id);
  }

  addDataMahasiswa(data) {
    return this.http.post(`http://localhost:8080/mahasiswa/`, data);
  }

  editDataMahasiswa(data) {
    return this.http.post(`http://localhost:8080/mahasiswa/edit/`, data);
  }

  deleteDataMahasiswa(data) {
    return this.http.post(`http://localhost:8080/mahasiswa/delete/`, data);
  }
}
