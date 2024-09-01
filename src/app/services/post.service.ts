import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    let url = 'https://tw6d1qml-44386.uks1.devtunnels.ms/api/Posts'
    let headers = new HttpHeaders().set('X-Tunnel-Authorization', 'tunnel eyJhbGciOiJFUzI1NiIsImtpZCI6IkI5Mjg5QzBFRDIyMUJENjhBNTA3MjA3MzY4MEI1MjFDRDVGRTEyQzIiLCJ0eXAiOiJKV1QifQ.eyJjbHVzdGVySWQiOiJ1a3MxIiwidHVubmVsSWQiOiJraW5kLXJpdmVyLTdndmIzam4iLCJzY3AiOiJjb25uZWN0IiwiZXhwIjoxNzI0ODQxODc1LCJpc3MiOiJodHRwczovL3R1bm5lbHMuYXBpLnZpc3VhbHN0dWRpby5jb20vIiwibmJmIjoxNzI0NzU0NTc1fQ.o-STVTd3fRAVnAL5TD-H6gEU4fXwalVTmqojP2JgA8uWKY51BLZg5mrBVgnoc1xlTKtBioz8AuH8wnQW-eo_fgeyJhbGciOiJFUzI1NiIsImtpZCI6IkI5Mjg5QzBFRDIyMUJENjhBNTA3MjA3MzY4MEI1MjFDRDVGRTEyQzIiLCJ0eXAiOiJKV1QifQ.eyJjbHVzdGVySWQiOiJ1a3MxIiwidHVubmVsSWQiOiJraW5kLXJpdmVyLTdndmIzam4iLCJzY3AiOiJjb25uZWN0IiwiZXhwIjoxNzI0ODQxODc1LCJpc3MiOiJodHRwczovL3R1bm5lbHMuYXBpLnZpc3VhbHN0dWRpby5jb20vIiwibmJmIjoxNzI0NzU0NTc1fQ.o-STVTd3fRAVnAL5TD-H6gEU4fXwalVTmqojP2JgA8uWKY51BLZg5mrBVgnoc1xlTKtBioz8AuH8wnQW-eo_fg')
    return this.http.get(url, { headers })
   }

  createPost() { }

  deletePost() { }

  addComment() { }

  deleteComment() { }

}
