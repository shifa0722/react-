export default function Laptop({name, ram, storage, processor}){
    return (
        <div>
            <h2>name : {name}</h2>
            <h2>Ram : {ram}</h2>
            <h2>Storage : {storage}</h2>
            <h2>Processor : {processor}</h2>
        </div>
    );
}