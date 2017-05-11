import React       from 'react';
import PropTypes   from 'prop-types';
import StarsRating from 'quark/lib/StarsRating';
import Avatar      from 'quark/lib/Avatar';

export default class ReviewItem extends React.Component {
  static contextTypes = {
    i18n: PropTypes.object
  };

  render() {
    return (
      <div className="review__item t3" itemProp="review" itemScope itemType="http://schema.org/Review">
        <div className="review__info">
          <div className="review__author">
            <Avatar
              email     = {this.props.userMail ? this.props.userMail : ''}
              name      = {this.props.userName}
              size      = {40}
              src       = {this.props.userAvatar}
              isRounded = {true}
              className = "review__author-icon"
            />
            <span className="review__author-name" itemProp="author">{this.props.userName}</span>
          </div>
          <span className="review__score rating-stars-block" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
            <meta itemProp="worstRating" content = "1" />
            <meta itemProp="bestRating" content = "5" />
            <meta itemProp="ratingValue" content = {this.props.reviewScore} />
            <StarsRating
              defaultRating={this.props.reviewScore}
              disabled={true}
            />
            <span className={`review__flag iti-flag ${this.props.reviewFlag}`}> </span>
          </span>
          <span  className="review__date" itemProp="datePublished" content={this.props.reviewDate}>{this.props.reviewDate}</span>
        </div>
        <div className="review__item-content" itemProp="description">
          {this.props.reviewContent}
        </div>
        <div className="review__item-controls">
          <span className="review__item-reply tm-icon icon-message">{this.context.i18n.l('Reply')}</span>
        </div>
      </div>
    )
  }
}

ReviewItem.propTypes = {
  userName      : PropTypes.string,
  userMail      : PropTypes.string,
  reviewScore   : PropTypes.number,
  reviewContent : PropTypes.string,
  reviewDate    : PropTypes.string,
  reviewFlag    : PropTypes.string,
  userAvatar    : PropTypes.string
};