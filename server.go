package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files (index.html, style.css, main.js, etc.)
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	log.Println("Server running at http://localhost:9001/")
	err := http.ListenAndServe(":9001", nil)
	if err != nil {
		log.Fatal(err)
	}
}
