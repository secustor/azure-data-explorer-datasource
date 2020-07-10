import {
  QueryEditorFieldType,
  buildFieldQueryEditorSection,
  buildFilterQueryEditorSection,
  buildReduceQueryEditorSection,
} from './editor';

export const KustoFromEditorSection = buildFieldQueryEditorSection(fieldSection => fieldSection.build('from'));

export const KustoWhereEditorSection = buildFilterQueryEditorSection(filterSection =>
  filterSection
    .withOperators(operator => {
      operator('in')
        .supportTypes([QueryEditorFieldType.String, QueryEditorFieldType.Number])
        .withDescription('in (case-sensitive)')
        .multipleValues(true)
        .add();

      operator('in~')
        .supportTypes([QueryEditorFieldType.String, QueryEditorFieldType.Number])
        .withDescription('in (case-insensitive)')
        .add();

      operator('!in')
        .supportTypes([QueryEditorFieldType.String, QueryEditorFieldType.Number])
        .withDescription('not in (case-sensitive)')
        .multipleValues(true)
        .add();

      operator('!in~')
        .supportTypes([QueryEditorFieldType.String, QueryEditorFieldType.Number])
        .withDescription('not in (case-insensitive)')
        .multipleValues(true)
        .add();

      operator('==')
        .supportTypes([QueryEditorFieldType.Boolean])
        .withDescription('equal to')
        .booleanValues(true)
        .add();

      operator('!=')
        .supportTypes([QueryEditorFieldType.Boolean])
        .withDescription('not equal to')
        .booleanValues(true)
        .add();
    })
    .withMultipleRows(true)
    .build('where')
);

export const KustoValueColumnEditorSection = buildReduceQueryEditorSection(reduceSection =>
  reduceSection
    .withFunctions(functions => {
      functions('sum')
        .withLabel('Sum')
        .add();

      functions('avg')
        .withLabel('Avg')
        .add();

      functions('count')
        .withLabel('Count')
        .add();

      functions('max')
        .withLabel('Max')
        .add();

      functions('min')
        .withLabel('Min')
        .add();
    })
    .build('value-column')
);