
const ensureDataIsValid = (serializer) => async (request, response, next) => {
    try {
        const validated = await serializer.validate(request.body, {
            abortEarly: false,
            stripUnknown: true
        })

        request.validatedBody = validated

        return next()
    } catch (error) {
        return response.status(400).json({
            message: error.errors
        })
    }
}

export default ensureDataIsValid;

