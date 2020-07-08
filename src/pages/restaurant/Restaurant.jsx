import React, { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardDeck,
    CardText,
    CardImg,
} from "reactstrap";
import { fetchRestaurant } from "../../redux/actions";
import { connect } from "react-redux";

function Restaurant(props) {
    useEffect(() => {
        props.dispatch(fetchRestaurant());

        //eslint-disable-next-line
    }, []);
    return (
        <Container fluid={true}>
            <Row xs="1" sm="2" md="4">
                {props.restaurant.restaurants !== undefined &&
                    props.restaurant.restaurants.map((restaurant) => {
                        return (
                            <Col
                                key={restaurant.restaurant.id}
                                lg={3}
                                md={6}
                                xs={12}
                                style={{
                                    padding: 25,
                                    justifyContent: "center",
                                }}
                            >
                                <CardDeck>
                                    <Card>
                                        <CardImg
                                            top
                                            width="150%"
                                            height="250px"
                                            src={
                                                restaurant.restaurant
                                                    .featured_image
                                            }
                                            alt="Card image cap"
                                        />
                                        <CardBody>
                                            <CardText
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {restaurant.restaurant.name}
                                            </CardText>
                                            <CardText className="text-muted">
                                                {
                                                    restaurant.restaurant
                                                        .location.address
                                                }
                                            </CardText>
                                            <hr />
                                            <CardText className="text-muted">
                                                Masakan:{" "}
                                                {restaurant.restaurant.cuisines}
                                            </CardText>

                                            <CardText className="text-muted">
                                                Harga untuk 2 orang:{" "}
                                                {
                                                    restaurant.restaurant
                                                        .average_cost_for_two
                                                }
                                            </CardText>

                                            <CardText className="text-muted">
                                                Jam:{" "}
                                                {restaurant.restaurant.timings}
                                            </CardText>

                                            <CardText className="text-muted">
                                                Telepon:{" "}
                                                {
                                                    restaurant.restaurant
                                                        .phone_numbers
                                                }
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </CardDeck>
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurants,
    };
};

export default connect(mapStateToProps, null)(Restaurant);
