import React, { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    CardDeck,
    Card,
    CardImg,
    CardBody,
    CardText,
} from "reactstrap";
import { fetchRestaurants } from "../../redux/actions";
import { connect } from "react-redux";

function DetailsRestaurants(props) {
    useEffect(() => {
        props.dispatch(fetchRestaurants());

        //eslint-disable-next-line
    }, []);
    return (
        <Container>
            <Row xs="1" sm="2" md="4">
                <Col>
                    <CardDeck>
                        <Card>
                            {props.detailrestaurant.restaurants !==
                                undefined && (
                                <CardImg
                                    top
                                    width="150%"
                                    height="250px"
                                    src={
                                        props.detailrestaurant.restaurant
                                            .featured_image
                                    }
                                    alt="Card image cap"
                                />
                            )}
                            <CardBody>
                                <CardText
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {props.detailrestaurant.restaurant.name}
                                </CardText>
                                <CardText className="text-muted">
                                    {
                                        props.detailrestaurant.restaurant
                                            .location.address
                                    }
                                </CardText>
                                <hr />
                                <CardText className="text-muted">
                                    Cuisines:
                                    {props.detailrestaurant.restaurant.cuisines}
                                </CardText>
                                <CardText className="text-muted">
                                    Times:
                                    {props.detailrestaurant.restaurant.timings}
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        detailrestaurant: state.restaurants,
    };
};

export default connect(mapStateToProps, null)(DetailsRestaurants);
