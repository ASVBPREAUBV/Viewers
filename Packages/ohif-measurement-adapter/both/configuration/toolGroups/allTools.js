import { ToolGroupBaseSchema } from './baseSchema';
import { length } from '../tools/length';
import { ellipse } from '../tools/ellipse';

export const allTools = {
    id: 'allTools',
    name: 'Measurements tools',
    childTools: [length, ellipse],
    schema: ToolGroupBaseSchema
};
