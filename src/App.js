import logo from './logo.svg';
import './App.css';
import Package from "./components/Package";

const packagesList = [
    {
        title: "deluxe",
        src: "https://www.dropbox.com/s/36wj2vzflqw3d20/_DSF9261-min.jpg?dl=1",
        description: `A3 60 Page Photo-book,Two Photographers All Edited Photos,Private Online Gallery & Delivery,Engagement Photo-shoot,Evening Reception Coverage,Duration: Till 10pm 4-6 Weeks Editing`,
        price: "KES 250,000"
    },
    {
        title: "STANDARD",
        src: "https://www.dropbox.com/s/9hd0pa86zx6d73p/DJI_0459-min.jpg?dl=1",
        flexVal: "-reverse",
        description: `A3 40 Page Photo-book,Two Photographers All Edited Photos,Private Online Gallery & Delivery,Engagement Photo-shoot,Evening Reception Coverage,Duration: Till 10pm 4-6 Weeks Editing`,
        price: "KES 200,000"
    },
    {
        title: "BASIC",
        src: "https://www.dropbox.com/s/9hd0pa86zx6d73p/DJI_0459-min.jpg?dl=1",
        description: `A3 40 Page Photo-book,Two Photographers All Edited Photos,Private Online Gallery & Delivery,Engagement Photo-shoot,Evening Reception Coverage,Duration: Till 10pm 4-6 Weeks Editing`,
        price: "KES 150,000"
    }

]

function App() {
    return (
        <div className="App">
            <div>
                <h1 className="mt-7 text-4xl md:text-5xl font-light font-brandonGrotesque">Wedding Packages</h1>

                <p className="pt-7 text-lg font-light font-brandonGrotesque px-4 md:px-36">Our packages are designed to
                    cater to all your photography needs,
                    whether it's capturing your wedding day or creating stunning
                    portraits for your family. Each package is customized to
                    fit your unique requirements and budget.</p>
            </div>
            {packagesList.map((pkg) => {
                return <Package
                    title={pkg.title}
                    src={pkg.src}
                    description={pkg.description}
                    price={pkg.price}
                    flexVal={pkg.flexVal}
                />
            })}

        </div>
    );
}

export default App;
