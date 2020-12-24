import React, { Fragment, useState } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import Alert from "../layout/Alert";
import PropTypes from "prop-types";
import Usuarios from "./adm/Usuarios";
import Impressoras from "./adm/Impressoras";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../routing/PrivateRoute";

const Administracao = (props) => {
  return (
    <Fragment>
      <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
        <li class="nav-item">
          <Link
            class={`nav-link text-dark ${
              window.location.pathname == "/administracao" ? "active" : ""
            }`}
            id="usuarios-tab"
            data-toggle="tab"
            to="/administracao"
            role="tab"
            aria-controls="usuarios"
            aria-selected={
              window.location.pathname == "/administracao" ? "true" : "false"
            }
          >
            Usuários
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class={`nav-link text-dark ${
              window.location.pathname == "/administracaoimpressoras"
                ? "active"
                : ""
            }`}
            id="impressoras-tab"
            data-toggle="tab"
            to="/administracaoimpressoras"
            role="tab"
            aria-controls="impressoras"
            aria-selected={
              window.location.pathname == "/administracaoimpressoras"
                ? "true"
                : "false"
            }
          >
            Impressoras
          </Link>
        </li>
        <li class="nav- ">
          <Link
            class="nav-link text-dark"
            id="suprimentos-tab"
            data-toggle="tab"
            to="/administracaosuprimentos"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Suprimentos
          </Link>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div>
          <Switch>
            <PrivateRoute exact path="/administracao" component={Usuarios} />
            <PrivateRoute
              exact
              path="/administracaoimpressoras"
              component={Impressoras}
            />
            <PrivateRoute
              exact
              path="/administracaosuprimentos"
              component={Impressoras}
            />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

Administracao.propTypes = {};

export default Administracao;
