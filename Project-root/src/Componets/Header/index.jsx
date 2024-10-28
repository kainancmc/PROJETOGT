import styles from './Header.module.css'
// import Logo from './components/logo_Header.jsx'

function Header (){
    return(
        <header className= {styles.header}>
          <div className={styles.headerTop}>
             <span>Icone</span>
             <nav>
             <a href="">Barra de busca</a>
                <a href="">Cadastre-se</a>
                <a href="">Entrar</a>
                <a href="">Carrinho de compras</a> 
             </nav> 
           </div>
           <div className={styles.headerBottom}> 
               <a href="">home</a>
               <a href="">Produtos</a>
               <a href="">Categorias</a>
               <a href="">Meus pedidos</a>
           </div>

        </header>

    )
}

export default Header