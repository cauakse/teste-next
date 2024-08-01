import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse{
    name: string;
    timestamp:Date
}

const Dynamic : NextPage = ()=>{
    const [clientSideData, setClientSideData] = useState<ApiResponse>()
    
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch('/api/hello').then(response=>response.json());
        setClientSideData(data);
    }
    return(
        <Container tag="main">
            <h1 className="my-5">
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
                    <h3 className="text-center">
                        Gerado no Servidor:
                    </h3>
                </Col>
                <Col>
                    <h3 className="text-center">
                        Gerado no Cliente:
                    </h3>
                    <h2 className="text-center">{clientSideData?.timestamp.toString()}</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Dynamic