import logo from './logo.svg';
import './App.css';
import Package from "./components/Package";

function App() {
  return (
    <div className="App">
        <div>
            <h1>Wedding Packages</h1>

            <p>Our packages are designed to cater to all your photography needs,
                whether it's capturing your wedding day or creating stunning
                portraits for your family. Each package is customized to
                fit your unique requirements and budget.</p>
        </div>
      <Package
          title="deluxe"
          description1="A3 60 Page Photo-book"
          description2="Two Photographers"
          description3="All Edited Photos"
          description4="Private Online Gallery & Delivery"
          description5="Engagement Photo-shoot"
          description6="Evening Reception Coverage"
          description7="Duration: Till 10pm 4-6 Weeks Editing"
          price="KES 250,000"

      />
        <Package
        title="STANDARD"
        description1="A3 40 Page Photo-book"
        description2="Two Photographers"
        description3="All Edited Photos"
        description4="Private Online Gallery & Delivery"
        description5="Engagement Photo-shoot"
        description6="Evening Reception Coverage"
        description7="Duration: Till 10pm 4-6 Weeks Editing"
        price="KES 200,000"

        />
    </div>
  );
}

export default App;
