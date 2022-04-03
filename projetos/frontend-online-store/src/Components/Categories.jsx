import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    this.getProductsCategories();
  }

  getProductsCategories = async () => {
    const result = await getCategories();
    this.setState({
      result: result.map((element) => {
        const { name, id } = element;
        return { name, id };
      }),
    });
  }

  render() {
    const { result } = this.state;
    const { onClickEvent } = this.props;
    return (
      <div>
        <ul>
          {
            result.map((element) => (

              <li
                key={ element.id }
              >
                <button
                  type="button"
                  data-testid="category"
                  id={ element.id }
                  onClick={ onClickEvent }
                >
                  {element.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
};
