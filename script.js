body {
  margin: 0;
  font-family: Arial;
  background: #f1f3f6;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2874f0;
  color: white;
  padding: 10px;
}

.search {
  width: 40%;
  padding: 8px;
}

.categories {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 10px;
}

.banner img {
  width: 100%;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  background: white;
  padding: 10px;
  text-align: center;
}

.product img {
  width: 100%;
  height: 150px;
}

button {
  background: orange;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
}
