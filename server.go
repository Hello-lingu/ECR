package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files (index.html, style.css, main.js, etc.)
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	log.Println("Server running at http://localhost:8010/")
	err := http.ListenAndServe(":8010", nil)
	if err != nil {
		log.Fatal(err)
	}
}
