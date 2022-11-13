import styles from "./styles.module.css";

    const ItemList = ({item}) => {

        const {marca, modelo, descricao, cor, img} = item;
        //Utilizei uma nova const para desestruturar o objeto item, permitindo que eu utilize as propriedades do objeto item de forma mais simples

        return (
            <li className={styles.item_list} style={{background: cor}}>
                <h2>{modelo}</h2>
                <h3>{marca}</h3>
                <p>{descricao}</p>
                <img src={img}/>
            </li>)

    }

    export default ItemList 