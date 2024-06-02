<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PopulateLoansMetaColumn extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-loans-meta';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    

    public function handle()
    {
        //
        $records = DB::table('loans')->get();

        foreach ($records as $record) {
            $meta = json_encode([
                'interest_amount' => $record->loan_amount * 0.05,
                'interest_percentage' => 0.05,
            ]);

            DB::table('loans')
                ->where('id', $record->id)
                ->update(['meta' => $meta]);
        }

        $this->info('Meta column populated successfully');
        return 0;
    }
}
