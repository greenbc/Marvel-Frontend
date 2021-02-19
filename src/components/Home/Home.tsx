interface Props{
    title: string;
}

export const Home = (props:Props) => {
    return (
        <div>
            <h1>Hello Marvel Fans From React!</h1>
            <h4> { props.title } </h4>
        </div>
    )
}