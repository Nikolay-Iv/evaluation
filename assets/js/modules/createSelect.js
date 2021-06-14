import {Select} from './select';

export default function() {
    const experience = new Select('#experience', {
        placeholder: 'Выбери профессию',
        data: [
          {id: '1', value: 'Аналитик'},
          {id: '2', value: 'Python-разработчик'},
          {id: '3', value: 'Java-разработчик'},
          {id: '4', value: 'Frontend-разработчик'},
        ],
    });

    const qualification = new Select('#qualification', {
        placeholder: 'Выбери профессию',
        data: [
          {id: '1', value: 'Junior'},
          {id: '2', value: 'Middle'},
          {id: '3', value: 'Senior'},
        ],
    });

    const futureExperience = new Select('#future-experience', {
        placeholder: 'Выбери профессию',
        data: [
            {id: '1', value: 'Аналитик'},
            {id: '2', value: 'Python-разработчик'},
            {id: '3', value: 'Java-разработчик'},
            {id: '4', value: 'Frontend-разработчик'},
        ],
    });
}
