import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {authors} from "../util/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import erkek from "../images/erkek.jpg"
import kadin from "../images/kadin.jpg"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={erkek}
          style={{ maxWidth: "100%" }}
          alt="kemal kaan çetindağ"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={kadin} style={{ maxWidth: "100%" }} alt="Müge Anlı" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
