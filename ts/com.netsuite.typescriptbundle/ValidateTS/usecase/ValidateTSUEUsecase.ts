import { ValidateTSgateway } from '../gateway/ValidateTSgateway';

export class ValidateTSUEUsecase {

    public static _throwErrorWhenInvalidParameter(options: any) {
        if (!options) throw new Error('constants.ERROR_CONST.OPTIONS');
        if (!options.dependencies) throw new Error('constants.ERROR_CONST.DEPENDENCIES');
        if (!options.dependencies['ValidateTSgateway'])
            throw new Error('_errors.TRUCK_MR_GATEWAY_IS_REQUIRED');
    }

    public dependencies: any;
public gateway: ValidateTSgateway;

constructor(options: any) {
    this.dependencies = options.dependencies;
    this.gateway =  options.dependencies['ValidateTSgateway'];
    ValidateTSUEUsecase._throwErrorWhenInvalidParameter(options);
}
}
