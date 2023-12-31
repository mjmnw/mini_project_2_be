const AuthService = require("../services/authService");

const authControllers = {
    createUser: async (req, res) => {
        try {
            const {
                username,
                password,
                fullname,
                email,
                birthdate,
                phone_number,
                address,
                gender,
                refferal_code,
                balance,
                point,
                users_roles_id,
            } = req.body;

            const serviceResult = await AuthService.createUser(
                username,
                password,
                fullname,
                email,
                birthdate,
                phone_number,
                address,
                gender,
                refferal_code,
                balance,
                point,
                users_roles_id
            );
            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const serviceResult = await AuthService.loginUser(
                username,
                password
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    keepLoginUser: async (req, res) => {
        try {
            const { tokens } = req;

            const serviceResult = await AuthService.keepLoginUser(tokens);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    changePassword: async (req, res) => {
        try {
            const { userId, oldPassword, newPassword } = req.body;

            const serviceResult = await AuthService.changePassword(
                userId,
                oldPassword,
                newPassword
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    sendResetPasswordEmail: async (req, res) => {
        try {
            const { userEmail } = req.body;

            const serviceResult = await AuthService.sendResetPasswordEmail(
                userEmail
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    resetPassword: async (req, res) => {
        try {
            const { resetPasswordToken, password } = req.body;

            const serviceResult = await AuthService.resetPassword(
                resetPasswordToken,
                password
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },
};

module.exports = authControllers;
