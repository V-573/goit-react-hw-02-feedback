const Section = ({children, title}) => {
    
    return <div className="section"><p>{title}</p> {children}</div>

};

export default Section;

//Section es un componente funcional que toma un prop llamado children. En react
// children es una prop especialque permite que los componentes anidados dentro de
// un conponente padre se pasen como hijos.

// el retorno de este component se refiere a cualquier contenido que este dentro de 
// las etiquetas <Section></Section> cuando se usa este componente en otros lugares