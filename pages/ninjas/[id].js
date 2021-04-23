export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths: paths, // And the it will know how many html pages to create based on this
        fallback: false
    }
}

export const getStaticProps = async () => {
    const id = context.params.id;
    const res = fetch('https://jsonplaceholder.typicode.com/users' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}


const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <h1>{ ninja.email }</h1>
            <h1>{ ninja.website }</h1>
            <h1>{ ninja.adress.city }</h1>
        </div>
     );
}
 
export default Details;
<div>

</div>