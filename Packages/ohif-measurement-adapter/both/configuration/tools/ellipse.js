import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurement-table/both/schema/measurements';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const EllipseHandlesSchema = new SimpleSchema({
    start: {
        type: CornerstoneHandleSchema,
        label: 'Start'
    },
    end: {
        type: CornerstoneHandleSchema,
        label: 'End'
    },
    textBox: {
        type: CornerstoneHandleSchema,
        label: 'Text Box'
    },
});

const EllipseSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: EllipseHandlesSchema,
        label: 'Handles'
    },
    measurementNumber: {
        type: Number,
        label: 'Measurement Number'
    },
    area: {
        type: Number,
        label: 'Area',
        optional: true,
        decimal: true
    },
    response: {
        type: String,
        label: 'Response',
        optional: true // Optional because it is added after initial drawing, via a callback
    },
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    description: {
        type: String,
        label: 'Description',
        optional: true
    }
}]);

const displayFunction = data => {
    return data.length;
};

export const ellipse = {
    id: 'ellipticalRoi',
    name: 'Ellipse',
    toolGroup: 'temp',
    cornerstoneToolType: 'ellipticalRoi',
    schema: EllipseSchema,
    options: {
        measurementTable: {
            displayFunction
        }
    }
};
