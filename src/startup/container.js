// Requires //
const { createContainer, asClass, asValue, asFunction } = require('awilix')

// Requires config //
const config = require('../config')

// Require server //
const server = require('.')

// Require services //
const { HomeService, UserService, IdeaService, CommentService, AuthService } = require('../services')

// Require controller //
const { HomeController, UserController, IdeaController, CommentController, AuthController } = require('../controllers')

// Require routes //
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes')
const Routes = require('../routes')

// Require models //
const { UserModel, IdeaModel, CommentModel } = require('../models')

// Require repositories //
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories')

// Create container //
const container = createContainer()

// Use container //
container


.register({
    // Config //
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),

    // Services //
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),

    // Controllers //
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),

    // Models //
    UserModel: asValue(UserModel),
    IdeaModel: asValue(IdeaModel),
    CommentModel: asValue(CommentModel),

    // Repositories //
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
})

// Routes //
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
})

// Exports //
module.exports = container