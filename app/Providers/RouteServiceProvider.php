<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map(){
        $this->mapApiRoutes();

        $this->mapWebRoutes();

    }

    private function baseDomain(string $subdomain = ''): string{
        if (strlen($subdomain) > 0) {
            $subdomain = "{$subdomain}.";
        }

        return $subdomain . config('app.base_domain');
    }

    protected function mapApiRoutes(){
        Route::domain($this->baseDomain())
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }

    protected function mapWebRoutes(){
        Route::domain($this->baseDomain())
             ->middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    protected function mapAdminRoutes()
    {
        Route::domain($this->baseDomain('admin'))
             ->middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/admin.php'));
    }
}