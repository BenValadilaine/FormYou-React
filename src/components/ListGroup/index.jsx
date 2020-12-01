import React, {useState, useEffect} from "react";
import ListGroupItem from '../ListGroupItem/index';

const ListGroup = ({ }) => {


    const [activeFilters, setActiveFilters] = useState([]);

    const handleFilter = (value) => {
        if (activeFilters.find((e) => e.id === value.id)) {
            let updatedFilter = activeFilters.find((e) => e.id === value.id);
            let otherFilters = activeFilters.filter((e) => e.id != value.id);
            updatedFilter = { ...updatedFilter, ...value };
            setActiveFilters([...otherFilters, updatedFilter])
        } else {
            setActiveFilters([...activeFilters, value]);
        }

    }

    useEffect(()=>{

        console.log(activeFilters)

    }, [activeFilters])

    return (
        <ul className="list-group d-block overflow-auto" style={{ height: "45vh" }}>



            {
                Array.from(Array(10).keys()).map((e) => {

                    return <ListGroupItem key={e} name={`category_${e}`} id={e} text={`Categorie ${e}`} handleFilter={(value) => { handleFilter(value) }} />

                })
            }



        </ul>
    )
}


export default ListGroup;