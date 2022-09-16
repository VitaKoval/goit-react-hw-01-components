import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../randomColor';

export const Statistics = ({ title, stats }) => {
  // console.log(Boolean(title))
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(stat => {
          return (
            <li
              className={css.item}
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
