import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa/lib/Icon'
import RepositoryItem from './components/RepositoryItem/RepositoryItem'
import './AllRepositories.scss'

class AllRepositories extends React.Component {

  // static propTypes = {
  //   repositories: PropTypes.arrayOf(PropTypes.shape(repositoryItemPropTypes)),
  // };

  static defaultProps = {
    repositories: [
      {
        path: 'facebook/react',
        name: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti soluta non, provident perspiciatis sit expedita blanditiis nobis eveniet illum, perferendis aliquid minima rerum fuga officiis assumenda recusandae accusamus quasi eius!',
        starsCount: 35,
        indicatorColorIndex: 0,
      },
      {
        path: 'facebook/redux',
        name: 'Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi ipsam doloribus blanditiis! Numquam excepturi soluta, beatae aperiam nobis praesentium odio expedita ab id. Perferendis cum, id doloribus accusantium laboriosam!',
        starsCount: 35,
        indicatorColorIndex: 4,
      },
      {
        path: 'vinpac/slack-it',
        name: 'Slack it',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cumque asperiores illum voluptatibus eligendi quo quidem, provident enim, voluptas vero iusto! Dolorem eum, optio ad voluptates odit aliquid ducimus temporibus!',
        starsCount: 35,
        indicatorColorIndex: 4,
      },
      {
        path: 'tumblr/web',
        name: 'Tumblr',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, adipisci sapiente dolorum molestias id mollitia omnis in soluta blanditiis ex officia, pariatur, ducimus. Quo, amet provident repellat quia fugiat fugit.',
        starsCount: 35,
        indicatorColorIndex: 3,
      },
      {
        path: 'facebook/react-1',
        name: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione natus atque explicabo voluptates dicta, quod magnam in consequatur asperiores ad excepturi accusantium quasi odio maxime nobis, omnis mollitia tempore similique!',
        starsCount: 35,
        indicatorColorIndex: 4,
      },
      {
        path: 'facebook/redux-1',
        name: 'Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium provident, incidunt itaque, ipsam ipsa enim suscipit facilis id blanditiis eos quam laborum obcaecati fugit omnis repellat optio hic nesciunt asperiores.',
        starsCount: 35,
        indicatorColorIndex: 0,
      },
      {
        path: 'vinpac/slack-it-1',
        name: 'Slack it',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vero quisquam nihil dolore voluptate cum, non dolorum nemo ad, error in eos natus assumenda sint, enim, dolor blanditiis! Commodi, rerum.',
        starsCount: 35,
        indicatorColorIndex: 1,
      },
      {
        path: 'tumblr/web-1',
        name: 'Tumblr',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab assumenda expedita! Aperiam commodi recusandae, aut, molestias fuga reprehenderit assumenda, veniam sed unde velit officia perspiciatis delectus. Officia neque, qui.',
        starsCount: 35,
        indicatorColorIndex: 2,
      },
    ],
  };

  render() {
    const { repositories } = this.props

    return (
      <div>
        <div className="all-repositories">
          {repositories.map(repository => (
            <RepositoryItem
              key={repository.path}
              {...repository}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default AllRepositories
