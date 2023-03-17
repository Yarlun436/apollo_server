import * as React from "react";
let logo = "https://i.discogs.com/c8MVPXXgq4QQFBzNRsD9N1Db5anmBKQSwHYUeyZy3YY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyNTMz/MDctMTU5Mzc3NzIw/Mi04NDYzLmpwZWc.jpeg";


export default class FirstComponent extends React.Component<{}> {
    render() {
        return(
            <div className="">
                <h3>Primer componente en React utilizando Typescript</h3>
                <div className="">
                    <img src={logo} height='250' alt="" />
                </div>
                <p>Tomas Jaramillo</p>
            </div>
        );
    }
}