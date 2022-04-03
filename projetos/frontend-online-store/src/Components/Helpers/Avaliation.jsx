import React from 'react';

export default class Avaliation extends React.Component {
  render() {
    return (
      <div>
        <p>Avalie o produto</p>
        <form>
          <label htmlFor="email">
            <p>Email</p>
            <input id="email" type="email" />
          </label>

          <div>
            <p>Nota</p>
            <label htmlFor="one">
              1
              <input id="one" type="radio" value="1" />
            </label>
            <label htmlFor="two">
              2
              <input id="two" type="radio" value="1" />
            </label>
            <label htmlFor="three">
              3
              <input id="three" type="radio" value="1" />
            </label>
            <label htmlFor="four">
              4
              <input id="four" type="radio" value="1" />
            </label>
            <label htmlFor="five">
              5
              <input id="five" type="radio" value="1" />
            </label>
          </div>

          <div>
            <textarea
              placeholder="Deixe sua avaliação"
              data-testid="product-detail-evaluation"
            />
          </div>

          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}
