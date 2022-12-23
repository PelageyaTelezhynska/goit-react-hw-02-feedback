import { nanoid } from 'nanoid';
import { Section } from '../Section/Section';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <ul>
        {options.map(option => (
          <li key={nanoid()}>
            <button type="submit" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};
