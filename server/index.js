import  express from "express";

const app = express()

const port = 3000

const PUBLISHABLE_KEY ="pk_test_51IlaJaSE2LpFM67yMcRTvedd9N67cLfodcotYP4OMd4CgeVYSwaxDLbDXA9eGnAZQPUTVk4gvj6LJFkMrrVDFmtQ00wBSSgD75";
const SECRET_KEY = "sk_test_51IlaJaSE2LpFM67yrMb45HitDsgj5smItff791KMMDV6NxrvnecIMPL0xkA91f9WovuXDquTxV8IbaExVKGeDXi000s7lGf7NI";

app.listen(port,()=> {
    console.log(`server is running at http://localhost:${port}`);
})