import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { OptionList, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <OptionList>
        {options.map(option => (
          <li key={nanoid()}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        ))}
      </OptionList>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
