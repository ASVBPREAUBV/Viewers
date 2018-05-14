import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurement-table/both/schema/measurements';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const LengthHandlesSchema = new SimpleSchema({
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
    }
});

const LengthSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: LengthHandlesSchema,
        label: 'Handles'
    },
    measurementNumber: {
        type: Number,
        label: 'Measurement Number'
    },
    length: {
        type: Number,
        label: 'Length',
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

export const length = {
    id: 'length',
    name: 'Length',
    toolGroup: 'temp',
    cornerstoneToolType: 'length',
    schema: LengthSchema,
    options: {
        measurementTable: {
            displayFunction
        }
    }
};
